
$(document).ready(function () {
    new Medium({
        element: document.getElementById('profile-desc')
    });

    new Medium({
        element: document.getElementById('profile-name')
    });

    new Medium({
        element: document.getElementById('profile-tagline')
    });

    Dropzone.options.myDropzone = {
        //your configuration goes here

        init: function () {
            var myDropzone = this;
            //You can do this
            $('#your_button_id').on("click", function (e) {
                myDropzone.removeAllFiles(true);
            });

            //But you should do this
            this.on("success", function (file, response) {
                myDropzone.removeAllFiles(true);
            });

            //and this to handle any error
            this.on("error", function (file, response) {
                //handle errors here
            });
        }
    }


    var profileImageDropzone = new Dropzone(".profile-image-upload",
        {
            url: "/upload",
            paramName: 'image',
            clickable: true,
            createImageThumbnails: false
        });

});
