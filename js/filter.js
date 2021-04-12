$(document).ready(function() {

    /**
     * slider
     */

    if (document.getElementById('timeslider')) {
        var slider = document.getElementById('timeslider');
        noUiSlider.create(slider, {
            start: [0, 80],
            connect: true,
            range: {
                'min': 0,
                'max': 120
            }
        });

        slider.noUiSlider.on('change.one', function () {
            filter();
        });

        var timestart = document.getElementById('timestart');
        var timeend = document.getElementById('timeend');

        timestart.addEventListener('change', function () {
            slider.noUiSlider.set([this.value, null]);
        });
        timeend.addEventListener('change', function () {
            slider.noUiSlider.set([null, this.value]);
        });

        slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            value = value.split('.');
            value = value[0];
            if (handle) {
                timeend.value = value;
            } else {
                timestart.value = value;
            }
        });
    }

    /**
     * datepicker
     */

    $('.date-input input[type=text]').each(function(){
        $(this).datepicker({
            range: false,
            autoClose: true,
            onSelect: function(fd, d, picker) {
                filter();
            }
        });
    });

    /**
     * date-ready
     */

    $(document).on('click', '.date-ready', function (){
        let container = $(this).closest('.catalog-filter-items'),
            dateStart = $(this).data('start'),
            dateEnd = $(this).data('end');

        container.find('.js-start').val(dateStart);
        container.find('.js-end').val(dateEnd);

        filter();
    });

    /**
     * Filter clear
     */

    $(document).on('click', '.js-filter-clear', function (){
        $(this).closest('form').get(0).reset();
        filter();
    });

    /**
     * change filter params
     */

    $('.catalog-filter input').on('change', function(){
        filter();
    });

    function filter() {

        let form = $('.catalog-filter');

        $('.catalog-enum,.loading').addClass('load');


        setTimeout(function(){
            $('.catalog-enum,.loading').removeClass('load');
        }, 3000 );

    }

});