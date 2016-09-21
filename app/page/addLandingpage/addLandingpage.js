/**
 * Created by pc_01 on 2016-09-12.
 */
(function ($) {
  $('.input-daterange').datepicker({
    todayBtn: "linked",
    language: "ko",
    startDate: "today"
  });

  $("#mainImage").fileinput({
    browseClass:"btn btn-lc1"
  });
})(jQuery);
