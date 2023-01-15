<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

if (!function_exists("generate_mask")) {
    function generate_mask()
    {
        return $uuid = (string) Str::orderedUuid();
    }
}
if (!function_exists("generate_random_password")) {
    function generate_random_password($min = 1111, $max = 9999999)
    {
        return rand($min, $max);
    }
}

if (!function_exists("deleteItemOldImage")) {
    function deleteOldImage($filename, $folder)
    {
        $path = "/" . $folder . "/" . $filename;
        File::delete(public_path($path));
    }
}

if (!function_exists("uploadItemImage")) {
    function uploadItemImage($file, $name, $folder, $subfix = null)
    {
        $extension = $file->getClientOriginalExtension();
        $originalName = Str::slug($name) . $subfix;
        $imageName = $originalName . '.' . $extension;
        $file->move(public_path($folder), $imageName);
        // Storage::disk('uploads')->put($imageName,$file);
        $url = url('/');
        $path = $url . '/' . $folder . '/' . $imageName;
        $result = new \stdClass();
        $result->filename = $imageName;
        $result->path = $path;
        return $result;
    }
}

if (!function_exists("generate_mask_string")) {
    function generate_mask_string($min = 1111, $max = 9999999)
    {
        return md5(uniqid(mt_rand($min, $max)));
    }
}

if (!function_exists("getMonth")) {
    function getMonth($name)
    {
        switch ($name) {
            case 1:
                return 'January';
                break;
            case 2:
                return 'February';
                break;
            case 3:
                return 'March';
                break;
            case 4:
                return 'April';
                break;
            case 5:
                return 'May';
                break;
            case 6:
                return 'June';
                break;
            case 7:
                return 'July';
                break;
            case 8:
                return 'August';
                break;
            case 9:
                return 'September';
                break;
            case 10:
                return 'October';
                break;
            case 11:
                return 'November';
                break;
            case 12:
                return 'December';
                break;

            default:
                # code...
                break;
        }

    }
}
if (!function_exists("sendSms")) {
    function sendSms($to, $message)
    {
        // try {
            //code...

            $body = $message;
            $to = $to;
            $from = '18332265402';

            $data = array('body' => $body, 'to' => $to, 'from' => $from);

            $newArray[] = $data;

            $myBody['messages'] = $newArray;
            $client = new \GuzzleHttp\Client();
            $response = $client->request('POST', 'https://rest.clicksend.com/v3/sms/send',

                [
                    'auth' => ['pcgebenezerbronx@gmail.com', '3101Eastchester#'],
                    'form_params' => $myBody,
                ]
            );
            return $response = $response->getBody()->getContents();

        // } catch (\Throwable$th) {

        // }
    }
}
