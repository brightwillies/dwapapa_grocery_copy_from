<script>
import { required, email } from "vuelidate/lib/validators";


export default {
  data() {
    return {
      email: "groceries@dwapapa.com",
      password: "Dwapapa@2023!!..",
      submitted: false
    };
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    }
  },
  created() {
    // document.body.classList.add("auth-body-bg");
    document.body.classList.add("bg-forgot-password");
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  methods: {

    adminLogin() {

      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      else {
        var vm = this;
        let formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);
        axios
          .post("/api/admin/v1/auth/login", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            (response) => {
              if (response) {
                const res = response.data;

                if (res.code == 200) {
                  var userData = res.data;

                  this.$session.set("grocery_admin", userData.user.mask);
                  this.$session.set("grocery_first_name", userData.user.first_name);
                  this.$session.set("grocery_first_token", userData.user.token);

                  // localStorage.setItem("ukchurchadminmask", userData.user.mask);
                  // localStorage.setItem("ukchurchadminusername", userData.user.first_name);
                  // localStorage.setItem("ukchurchadmintoken", userData.token);
                  // localStorage.setItem("permissions", userData.permissions);
                  axios.defaults.headers.common["Authorization"] =
                    "Bearer " + userData.token;
                  // store.commit("loginUser");
                  this.successToastRedirect(res.message, "/administrator-dashboard");
                } else {
                  // vm.$toasted.show(res.message);
                }
              }
            },
            function (error) {
              vm.isActive = false;

              if (error.response) {
                console.log(error.response.data.errors);
                error.response.data.errors.forEach((element) => {
                  vm.$toasted.show(element);
                });
                // alert(error.response.status);
              }
            }
          );
      }
    }


  }
};
</script>

<style scoped>
.bg-forgot-password {
  background-image: url(/assets/images/login/bg.png);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.container-fluid {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(1.5rem * .5);
  padding-left: calc(1.5rem * .5);
  margin-right: auto;
  margin-left: auto;
}

.authentication-card {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 50rem;
  height: 100vh;
}

.rounded-5 {
  border-radius: 2px !important;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

#subButton{
  margin-top: 20px;
  width: 100%;
}
</style>
<template>

  <div>
    <div class="wrapper">

      <main class="authentication-content">
        <div class="container-fluid">
          <div class="authentication-card">
            <div class="card shadow rounded-5 overflow-hidden">

              <div class="row g-0">
                <div class="col-lg-6 d-flex align-items-center justify-content-center border-end">

                  <img src="/assets/images/login/login-concept.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6">
                  <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title">Dwapapa Groceries Admin Dashboard</h5>
                    <!-- <p class="card-text mb-5">Enter your registered email ID to reset the password</p> -->
                    <form class="form-body" @submit.prevent="adminLogin">
                      <div class="row g-3">
                        <div class="col-12">
                          <label for="inputEmailid" class="form-label">Email</label>
                          <input type="email" v-model="email" class="form-control form-control-lg radius-30"
                            id="inputEmailid" :class="{ 'is-invalid': submitted && $v.email.$error }">
                          <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                            <span v-if="!$v.email.required">Email is required.</span>
                            <span v-if="!$v.email.email">Please enter valid email.</span>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="inputEmailid" class="form-label">Password</label>
                          <input type="text" v-model="password" class="form-control form-control-lg radius-30"
                            id="inputPassword" :class="{ 'is-invalid': submitted && $v.password.$error }">
                          <div v-if="submitted && !$v.password.required" class="invalid-feedback">Password is
                            required.</div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid gap-3">
                            <button  id="subButton" type="submit" class="btn btn-lg btn-secondary radius-30">Send</button>

                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>