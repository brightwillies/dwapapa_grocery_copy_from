import Vue from 'vue'

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import swal from "sweetalert2";
window.swal = swal;
const options = {
    confirmButtonColor: "#41b882",
    cancelButtonColor: "#ff7674"
};
Vue.use(VueSweetalert2, options);
Vue.use(VueSweetalert2);


export const mixin = Vue.mixin({
    methods: {
        successToastReloadPage(message) {
            const Toast = swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", swal.stopTimer);
                    toast.addEventListener("mouseleave", swal.resumeTimer);
                },
            },
                function () { }
            );

            Toast.fire({
                icon: "success",
                title: message,
            }).then(function () {

                window.location.reload();
            });

        },
        //successtoast message with redirect


        successToastRedirect(message, link) {
            const Toast = swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", swal.stopTimer);
                    toast.addEventListener("mouseleave", swal.resumeTimer);
                },
            },
                function () { }
            );

            Toast.fire({
                icon: "success",
                title: message,
            }).then(function () {

                window.location.replace(link);
            });

        },
    }
});


export default mixin