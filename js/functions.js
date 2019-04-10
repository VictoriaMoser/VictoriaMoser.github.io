// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};

$(function () {

    if ( typeof window.top.App === 'undefined' ) {
        // Published page
        $('.faq-toggle').addClass('collapsed');
        $('.faq-text').removeClass('in');
    } else {
        $('.faq-toggle').removeClass('collapsed');
        $('.faq-text').addClass('in');
    }

    var social = $('#social'),
        footer = $('.footer');

    social.affix({
        offset: {
            top: function () {
                return (this.top = (social.offset().top - 20))
            },
            bottom: function () {
                return (this.bottom = (footer.outerHeight() * 2))
            }
        }
    });

    $('.header-nav a, .footer__nav a').each(function() {
        if ($(this).attr('href').substring(0,1) == "#")
            $(this).smoothScroll();
    });

    $('.share').click(function(event){
          event.preventDefault();
          var service = $(this).data('service');
          switch(service) {
              case 'facebook':
                  url = ( LeadPageData['facebookShareURL']['value'] ? LeadPageData['facebookShareURL']['value'] : document.URL);
                  window_size = "width=585,height=368";
                  go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
                  break;
              case 'twitter':
                  url = ( LeadPageData['twitterShareURL']['value'] ? LeadPageData['twitterShareURL']['value'] : document.URL);
                  window_size = "width=585,height=261";
                  go = 'http://www.twitter.com/intent/tweet?url=' + url;
                  break;
              case 'google':
                  url = ( LeadPageData['googleShareURL']['value'] ? LeadPageData['googleShareURL']['value'] : document.URL);
                  window_size = "width=517,height=511";
                  go = 'http://plus.google.com/share?url=' + url;
                  break;
              case 'linkedin':
                  url = ( LeadPageData['linkedInShareURL']['value'] ? LeadPageData['linkedInShareURL']['value'] : document.URL);
                  window_size = "width=520,height=570";
                  go = 'http://www.linkedin.com/shareArticle?mini=true&url=' + url;
                  break;
              default:
                  return false;
          }
          window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
      });
});
