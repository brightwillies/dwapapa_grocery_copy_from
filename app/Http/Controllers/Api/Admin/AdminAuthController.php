<?php

namespace App\Http\Controllers\Api\Admin;

use App\Traits\ResponseTrait;
use DateTime;
use Exception;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\Personnel\Adminstrator;
use Illuminate\Support\Facades\Validator;

class AdminAuthController extends Controller
{
    use ResponseTrait;
    //
    public function login(Request $request)
    {


        try {
            $rules = [

                'email' => 'required',
                'password' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $errors = $validator->errors()->all();
                return $this->validationResponse($errors);
            }

            $password = $request->password;
            $email = $request->email;
            $admin = Adminstrator::where('email', (string) $email)->first();
            if (!$admin) {
                return $this->wrongCredentialsResponse();
                //  return $this->errorResponse('You have entered an invalid email or password');
            }

            if (Hash::check($password, $admin->password)) {
                $now_seconds = time();
                $userpemissions = array();
                $payload = [
                    "iss" => url("/"),
                    "iat" => time(),
                    "exp" => $now_seconds + (60 * 6300),
                    "id" => $admin->id,
                ];
                // Generate token
                if ($token = JWT::encode($payload, config("app.key"), 'HS256')) {

                    $admin->last_login = new DateTime();
                    $admin->save();
                    return $this->successResponse("Login Successful", [
                        "user" => $admin,
                        "token" => $token,
                        // 'permissions' =>[],
                        'permissions' => $userpemissions,
                    ]);
                }
            }
            return $this->wrongCredentialsResponse();

        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}