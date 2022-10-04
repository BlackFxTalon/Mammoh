function rangeSlider1() {
    
    let filterRangeSlider = $(".filter-range-slider--1");
    
    filterRangeSlider.slider({
max: 100000,
min: 0,
step:1,
range: true,
values: [0, 100000],
slide: (e, ui) => {
    let minSlideValue = $(".filter-range-slider--1 .ui-slider-pip-selected-1 .ui-slider-label").data('value');
    let maxSlideValue = $(".filter-range-slider--1 .ui-slider-pip-selected-2 .ui-slider-label").data('value');
    $('.filter-range-slider__input-min--rangeSlider-1').val(minSlideValue);
    $('.filter-range-slider__input-max--rangeSlider-1').val(maxSlideValue);
}
})
.slider("pips", {
first: "pip",
last: "pip",
});

let filterRangeSliderInputMin = $('.filter-range-slider__input-min--rangeSlider-1');
let filterRangeSliderInputMax = $('.filter-range-slider__input-max--rangeSlider-1');

let minValue = filterRangeSlider.slider("values")[0];
let maxValue = filterRangeSlider.slider("values")[1];

filterRangeSliderInputMin.val(minValue);
filterRangeSliderInputMax.val(maxValue);

filterRangeSliderInputMin.on('change',function() {
let filterRangeSliderInputMinValue = $(this).val();
 
filterRangeSlider.slider('values', '0', parseInt(filterRangeSliderInputMinValue));
filterRangeSlider.slider("pips", "refresh");
});

filterRangeSliderInputMax.on('change',function() {
let filterRangeSliderInputMaxValue = $(this).val();
 
filterRangeSlider.slider('values', '1', parseInt(filterRangeSliderInputMaxValue));
filterRangeSlider.slider("pips", "refresh");
});
};

function rangeSlider2() {
            let filterRangeSlider = $(".filter-range-slider--2");
            
            
        filterRangeSlider.slider({
            max: 100000,
min: 0,
step:1,
range: true,
values: [0, 100000],
        slide: (e, ui) => {
            let minSlideValue = $(".filter-range-slider--2 .ui-slider-pip-selected-1 .ui-slider-label").data('value');
            let maxSlideValue = $(".filter-range-slider--2 .ui-slider-pip-selected-2 .ui-slider-label").data('value');
            $('.filter-range-slider__input-min--rangeSlider-2').val(minSlideValue);
            $('.filter-range-slider__input-max--rangeSlider-2').val(maxSlideValue);
        }
    })
    .slider("pips", {
        first: "pip",
        last: "pip",
    });

    let filterRangeSliderInputMin = $('.filter-range-slider__input-min--rangeSlider-2');
    let filterRangeSliderInputMax = $('.filter-range-slider__input-max--rangeSlider-2');

    let minValue = filterRangeSlider.slider("values")[0];
    let maxValue = filterRangeSlider.slider("values")[1];

    filterRangeSliderInputMin.val(minValue);
    filterRangeSliderInputMax.val(maxValue);

    filterRangeSliderInputMin.on('change',function() {
        let filterRangeSliderInputMinValue = $(this).val();
         
        filterRangeSlider.slider('values', '0', parseInt(filterRangeSliderInputMinValue));
        filterRangeSlider.slider("pips", "refresh");
    });

    filterRangeSliderInputMax.on('change',function() {
        let filterRangeSliderInputMaxValue = $(this).val();
         
        filterRangeSlider.slider('values', '1', parseInt(filterRangeSliderInputMaxValue));
        filterRangeSlider.slider("pips", "refresh");
    });
      }

    rangeSlider1();
    rangeSlider2();

