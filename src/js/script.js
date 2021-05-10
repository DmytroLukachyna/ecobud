$(document).ready(function() {
    $('.tabs__wrapper').tabslet();
    $('[data-fancybox]:not(.slick-cloned)').fancybox({
        arrows: false,
        autoFocus: false,
        errorTpl: '<div class="fancybox-error"><p>Приносим извинения, произошла ошибка. Мы уже работаем над ее исправлением!</p></div>',
        buttons: [
            "zoom",
            "close"
        ]
    });
    $('.tabs__content-slider_1').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: $('.tabs__content-arrow_left-1'),
        nextArrow: $('.tabs__content-arrow_right-1'),
        accessibility: false,
        focusOnSelect: false,
        swipe: false,
        appendDots: '#tab-1 .tabs__content-dots',
        dotsClass: 'dot'

    });
    $('.tabs__content-slider_2').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: $('.tabs__content-arrow_left-2'),
        nextArrow: $('.tabs__content-arrow_right-2'),
        accessibility: false,
        focusOnSelect: false,
        swipe: false,
        appendDots: '#tab-2 .tabs__content-dots',
        dotsClass: 'dot'

    });
    var totalCommercial = $('#tab-1 .dot li');
    $('#tab-1 .tabs__counter').text(`1 проект из ${totalCommercial.length}`);
    var $statusCommercial = $('#tab-1 .tabs__counter');
    var $slickElementCommercial = $('#tab-1 .tabs__content-slider');
    $slickElementCommercial.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        if (!slick.$dots) {
            return;
        }
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusCommercial.text(i + ' проект из ' + (slick.$dots[0].children.length));
    });
    var totalHouse = $('#tab-2 .dot li');
    $('#tab-2 .tabs__counter').text(`1 проект из ${totalHouse.length}`);
    var $statusHouse = $('#tab-2 .tabs__counter');
    var $slickElementHouse = $('#tab-2 .tabs__content-slider');
    $slickElementHouse.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        if (!slick.$dots) {
            return;
        }
        var i = (currentSlide ? currentSlide : 0) + 1;
        $statusHouse.text(i + ' проект из ' + (slick.$dots[0].children.length));
    });
    $('.slick-slider').slick("refresh");

    $('.tabs__gallery-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        swipe: false,
        prevArrow: '<div class="tabs__gallery-arrow tabs__gallery-arrow_left"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.910734 6.58934C0.585297 6.2639 0.585297 5.73626 0.910734 5.41083L5.91073 0.410826C6.23617 0.0853887 6.76381 0.0853887 7.08925 0.410826C7.41468 0.736263 7.41468 1.2639 7.08925 1.58934L2.6785 6.00008L7.08925 10.4108C7.41468 10.7363 7.41468 11.2639 7.08925 11.5893C6.76381 11.9148 6.23617 11.9148 5.91074 11.5893L0.910734 6.58934Z" fill="#989EA2"/></svg></div>',
        nextArrow: '<div class="tabs__gallery-arrow tabs__gallery-arrow_right"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.08925 5.41083C7.41468 5.73626 7.41468 6.2639 7.08925 6.58934L2.08925 11.5893C1.76381 11.9148 1.23617 11.9148 0.910734 11.5893C0.585297 11.2639 0.585297 10.7363 0.910734 10.4108L5.32148 6.00008L0.910735 1.58934C0.585298 1.2639 0.585298 0.736263 0.910735 0.410826C1.23617 0.0853888 1.76381 0.0853888 2.08925 0.410826L7.08925 5.41083Z" fill="#989EA2"/></svg></div>',
        accessibility: false,
        focusOnSelect: false
    });
    $('.slider__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: $('.slider__arrow_left'),
        nextArrow: $('.slider__arrow_right'),
        accessibility: false,
        focusOnSelect: false,
        appendDots: '.slider__dots',
        dotsClass: 'dot',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.input__number').mask('+99 (999) 999-99-99', {
        'translation': {
            9: { pattern: /[0-9]/ }
        }
    });
    $(".input__number").focusin(function() {
        if ($(this).val().length === 0) {
            $(this).val('+38 (0');
        }
    });
    $(".input__number").focusout(function() {
        if ($(this).val().length < 7) {
            $(this).val('');
        }
    });

    $('.modal__form_1').submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            url: 'mailer/form.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: formData,
            success: function(msg) {
                if (msg == 'ok') {
                    $('.input__file').removeClass('input__file_loaded');
                } else {
                    $('.input__file').removeClass('input__file_loaded');
                    alert('Произошла ошибка, мы уже занимаемся решением ее проблемы. Попробуйте отправить заявку чуть позже. Спасибо!');
                }
            }
        }).done(function() {
            $(this).find("input").val("");
            $('.modal__form').trigger('reset');
            $('.input__file').text('Выберите файл');
            $('.thanks').fadeIn('fast');
            parent.$.fancybox.close();
            setTimeout(function() {
                $('.thanks').fadeOut('slow');
            }, 2500);

        });
    });
    $('.modal__form_2').submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            url: 'mailer/form_tender.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: formData,
            success: function(msg) {
                if (msg == 'ok') {
                    $('.input__file').removeClass('input__file_loaded');
                } else {
                    $('.input__file').removeClass('input__file_loaded');
                    alert('Произошла ошибка, мы уже занимаемся решением ее проблемы. Попробуйте отправить заявку чуть позже. Спасибо!');
                }
            }
        }).done(function() {
            $(this).find("input").val("");
            $('.modal__form').trigger('reset');
            $('.input__file').text('Выберите файл');
            $('.thanks').fadeIn('fast');
            parent.$.fancybox.close();
            setTimeout(function() {
                $('.thanks').fadeOut('slow');
            }, 2500);

        });
    });
    var modalOnTimer = setTimeout(function() {
        $.fancybox.open({
            src: '#modal_messenger_1'
        });
    }, 40000);
    $("[data-src]").on("click", function() {
        clearTimeout(modalOnTimer);
    });

    function fileAddition(addFile) {
        $(addFile).on("change", function() {
            if ($(addFile).get(0).files.length === 0) {
                $('.input__file').removeClass('input__file_loaded');
                $('.input__file').text('Выберите файл');

            } else {
                $('.input__file').addClass("input__file_loaded");
                $('.input__file').text('Добавлено файлов: ' + $(addFile).get(0).files.length);
            }
        });
    }
    fileAddition('#userfile');
    fileAddition('#userfile_tender');
    $('.tabs__item').click(function() {
        $('.slick-slider').slick("refresh");
    });
});