(function ($) {

    var SALON_WHATSAPP = '919842023382';

    function openWhatsApp(message) {
        var url = 'https://wa.me/' + SALON_WHATSAPP + '?text=' + encodeURIComponent(message);
        window.open(url, '_blank');
    }

    // =========================
    // APPOINTMENT FORM
    // =========================
    function initAppointmentSubmit() {
        $(document).off("submit.waForm", "#appointment-form").on("submit.waForm", "#appointment-form", function (e) {
            e.preventDefault();

            var $form = $(this);
            var isValid = true;

            // reset message
            $form.prevAll('.form-message').addClass('hidden');
            $form.find('.error-text').addClass('hidden');

            // required fields
            var requiredFields = [
                '#first-name',
                '#last-name',
                '#telephone',
                '#treatment' // hidden input
            ];

            $.each(requiredFields, function (i, selector) {
                var $field = $form.find(selector);

                if ($.trim($field.val()) === '') {
                    isValid = false;
                    var $wrap = $field.closest('div:has(> .error-text)');
                    if (!$wrap.length) $wrap = $field.closest('div').parent();
                    $wrap.find('.error-text').removeClass('hidden');
                }
            });

            if (isValid) {
                var firstName = $.trim($form.find('#first-name').val());
                var lastName = $.trim($form.find('#last-name').val());
                var telephone = $.trim($form.find('#telephone').val());
                var treatmentTexts = [];
                $form.find('.dd-multi__option.active').each(function () {
                    treatmentTexts.push($.trim($(this).text()));
                });
                var treatment = treatmentTexts.length
                    ? treatmentTexts.join(', ')
                    : $.trim($form.find('#treatment').val());
                var note = $.trim($form.find('#message').val());

                var lines = [
                    "Hello Kalai's Beauty & Academy! I would like to book an appointment.",
                    '',
                    'Name: ' + firstName + ' ' + lastName,
                    'Phone: ' + telephone,
                    'Treatment: ' + treatment
                ];
                if (note) lines.push('Note: ' + note);

                $form.prevAll('.form-message.success').removeClass('hidden');
                openWhatsApp(lines.join('\n'));
            } else {
                $form.prevAll('.form-message.error').removeClass('hidden');
            }
        });
    }

    // =========================
    // CONTACT FORM
    // =========================
    function initContactSubmit() {
        $(document).off("submit.waForm", "#contact-form").on("submit.waForm", "#contact-form", function (e) {
            e.preventDefault();

            var $form = $(this);
            var isValid = true;

            // reset message
            $form.prevAll('.form-message').addClass('hidden');
            $form.find('.error-text').addClass('hidden');

            // required fields
            var requiredFields = [
                '#first-name',
                '#last-name',
                '#email',
                '#phone'
            ];

            $.each(requiredFields, function (i, selector) {
                var $field = $form.find(selector);

                if ($.trim($field.val()) === '') {
                    isValid = false;
                    $field
                        .closest('.form-input-wrapper')
                        .find('.error-text')
                        .removeClass('hidden');
                }
            });

            if (isValid) {
                var cFirst = $.trim($form.find('#first-name').val());
                var cLast = $.trim($form.find('#last-name').val());
                var cEmail = $.trim($form.find('#email').val());
                var cPhone = $.trim($form.find('#phone').val());
                var cMsg = $.trim($form.find('#message').val());

                var cLines = [
                    "Hello Kalai's Beauty & Academy! New enquiry from the website.",
                    '',
                    'Name: ' + cFirst + ' ' + cLast,
                    'Email: ' + cEmail,
                    'Phone: ' + cPhone
                ];
                if (cMsg) cLines.push('Message: ' + cMsg);

                $form.prevAll('.form-message.success').removeClass('hidden');
                openWhatsApp(cLines.join('\n'));
            } else {
                $form.prevAll('.form-message.error').removeClass('hidden');
            }
        });
    }

    // INIT
    $(document).ready(function () {
        initAppointmentSubmit();
        initContactSubmit();
    });

})(jQuery);