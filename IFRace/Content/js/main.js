/*******************************************************************************

    Title :  Pikavia
    Date  :  Desember 2014
    Author:  Pikavia Engineering Team (http://www.pikavia.com)

********************************************************************************/
$(function () {
    Site.init();
    $('[data-toggle="tooltip"]').tooltip();
});

    var Site = {
        init: function () {
            Site.sidebarToggle();
            Site.controlSubMenu();
            Site.pengisianMinum();
            Site.pengisianPakan();
            Site.penyiraman();
            Site.convertMonth();
            Site.fullHeight();
        },

        sidebarToggle: function() {
            $("#header-s__toggle").click(function () {
                $('nav.sidebar-s').css('opacity', 1);
                var layerWidth = $(window).width() - $('nav.sidebar-s').width();
                $(".layer-hidden").css('width', layerWidth).css('display', 'block');
                $('.footer-s').css('position', 'fixed').css('left',290);
                $('#container-s').bind('touchmove', function (e) {
                  e.preventDefault()
                });
                $("#container-s").animate({"marginLeft": ["290px", 'swing']}, {
                  duration: 30
                });
              });

              //close the menu
              $(".layer-hidden").click(function () {
                $('#container-s').unbind('touchmove');
                $("#container-s").animate({"marginLeft": ["0", 'swing']}, {
                  duration: 30,
                  complete: function () {
                    $('.layer-hidden').css('display', 'none');
                    $('nav.sidebar-s').css('opacity', 0);
                    $('#content-s').css('min-height', 'auto');
                    $('.footer-s').css('position', 'absolute').css('left',0);
                  }
                });
          });
        },

        controlSubMenu: function() {
            $('a.menu-has-sub').click(function() {
                if($(this).children("i.sidebar-s--icon-ddown").hasClass("fa-angle-right")){
                    $(this).find("i.sidebar-s--icon-ddown").removeClass("fa-angle-right").addClass("fa-angle-down");
                    $(this).parents("li").addClass("sidebar-s--has-sub");
                    $(".sidebar-s--sub").slideDown();
                }
            });
        },

        pengisianMinum: function() {
            var loading ='';
            loading +='<i class="fa fa-spinner fa-spin"></i>';
            $('.container-rawat-isi').on("click", "a.rawat-isi-minum", function(event) {
                var rand = Math.floor(Math.random() * 2) + 1;

                var da = new Date();
                var utc = da.getTime() + (da.getTimezoneOffset() * 60000);
                var date = new Date(utc + (7200000*(7)));
                var d = date.getDate();
                var m = Site.convertMonth(date.getMonth());
                var y = date.getFullYear();
                var tanggal = d + " " + m + " " + y;

                var jam = date.getUTCHours();
                var menit = date.getUTCMinutes();
                var waktu = jam + "." + menit;

                var success = '';
                success += '<div class="pa__top-pad">';
                success += '<i class="fa fa-check-circle pa--success"></i> '
                success += 'Pengisian terakhir: ' + tanggal + ' ' + waktu + ' WIB. <a class="rawat-isi-minum">Isi kembali.</a>';
                success += '</div>';

                var fail = '';
                fail += '<div class="pa__top-pad">';
                fail += '<i class="fa fa-times-circle pa--fail"></i> '
                fail += 'Pengisian gagal. <a class="rawat-isi-minum">Coba lagi.</a>';
                fail += '</div>';
                if(rand == 1) { //success
                    $(this).hide().parents('.container-rawat-isi').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(success).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-isi-minum').attr('onClick','Site.pengisianMinum()');
                    });
                }
                else { //fail
                    $(this).hide().parents('.container-rawat-isi').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(fail).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-isi-minum').attr('onClick','Site.pengisianMinum()');
                        
                    });
                }
            });
        },

        pengisianPakan: function() {
            var loading ='';
            loading +='<i class="fa fa-spinner fa-spin"></i>';
            $('.container-rawat-isi').on("click", "a.rawat-isi-pakan", function(event) {
                var rand = Math.floor(Math.random() * 2) + 1;

                var da = new Date();
                var utc = da.getTime() + (da.getTimezoneOffset() * 60000);
                var date = new Date(utc + (7200000*(7)));
                var d = date.getDate();
                var m = Site.convertMonth(date.getMonth());
                var y = date.getFullYear();
                var tanggal = d + " " + m + " " + y;

                var jam = date.getUTCHours();
                var menit = date.getUTCMinutes();
                var waktu = jam + "." + menit;

                var success = '';
                success += '<div class="pa__top-pad">';
                success += '<i class="fa fa-check-circle pa--success"></i> '
                success += 'Pengisian terakhir: ' + tanggal + ' ' + waktu + ' WIB. <a class="rawat-isi-pakan">Isi kembali.</a>';
                success += '</div>';

                var fail = '';
                fail += '<div class="pa__top-pad">';
                fail += '<i class="fa fa-times-circle pa--fail"></i> '
                fail += 'Pengisian gagal. <a class="rawat-isi-pakan">Coba lagi.</a>';
                fail += '</div>';
                if(rand == 1) { //success
                    $(this).hide().parents('.container-rawat-isi').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(success).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-isi-pakan').attr('onClick','Site.pengisianPakan()');
                    });
                }
                else { //fail
                    $(this).hide().parents('.container-rawat-isi').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(fail).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-isi-pakan').attr('onClick','Site.pengisianPakan()');
                        
                    });
                }
            });
        },

        penyiraman: function() {
            var loading ='';
            loading +='<i class="fa fa-spinner fa-spin"></i>';
            $('.container-rawat-siram').on("click", "a.rawat-siram", function(event) {
                var rand = Math.floor(Math.random() * 2) + 1;

                var da = new Date();
                var utc = da.getTime() + (da.getTimezoneOffset() * 60000);
                var date = new Date(utc + (7200000*(7)));
                var d = date.getDate();
                var m = Site.convertMonth(date.getMonth());
                var y = date.getFullYear();
                var tanggal = d + " " + m + " " + y;

                var jam = date.getUTCHours();
                var menit = date.getUTCMinutes();
                var waktu = jam + "." + menit;

                var success = '';
                success += '<div class="pa__top-pad">';
                success += '<i class="fa fa-check-circle pa--success"></i> '
                success += 'Penyiraman terakhir: ' + tanggal + ' ' + waktu + ' WIB. <a class="rawat-siram">Siram kembali.</a>';
                success += '</div>';

                var fail = '';
                fail += '<div class="pa__top-pad">';
                fail += '<i class="fa fa-times-circle pa--fail"></i> '
                fail += 'Penyiraman gagal. <a class="rawat-siram">Coba lagi.</a>';
                fail += '</div>';
                if(rand == 1) { //success
                    $(this).hide().parents('.container-rawat-siram').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(success).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-siram').attr('onClick','Site.penyiraman()');
                    });
                }
                else { //fail
                    $(this).hide().parents('.container-rawat-siram').html('').append(loading).delay(1000).fadeOut(400,function() {
                        $(this).html('').append(fail).fadeIn(200).children('i').remove();
                        $(this).find('.rawat-siram').attr('onClick','Site.penyiraman()');
                        
                    });
                }
            });
        },

        convertMonth: function(m) {
            var mt = "";
            switch (m) {
                case 0:
                    mt = "Januari";
                    break;
                case 1:
                    mt = "Februari";
                    break;
                case 2:
                    mt = "Maret";
                    break;
                case 3:
                    mt = "April";
                    break;
                case 4:
                    mt = "Mei";
                    break;
                case 5:
                    mt = "Juni";
                    break;
                case 6:
                    mt = "Juli";
                    break;
                case 7:
                    mt = "Agustus";
                    break;
                case 8:
                    mt = "September";
                    break;
                case 9:
                    mt = "Oktober";
                    break;
                case 10:
                    mt = "November";
                    break;
                case 11:
                    mt = "Desember";
                    break;
            }
            return mt;
        },

        fullHeight: function() {
            var height = $(window).height() - $('header.header-s').height() - $('footer.footer-s').height();
            $('.tosca-wrapper').css('min-height',height);
        },

        opLight : {
            "overlay" : true,
            "overlay_color" : "#000",
            "opacity" : .5,
            "element" : null,
            "box-color" : null,
            "position" : "center",
            "onClose" : null,
            "autoLight" : false,
            "onLight" : null
        }
    }

    Site.Lightbox = function(opts){
        if(typeof opts != "object"){
            console.log("options harus bertipe object");
            return false;
        }
        if(opts.element == null | opts.element == ""){
            console.log("options.element harus diisi");
            return false;
        }

        var optionsKeys = Object.keys(opts);
        for(i = 0; i < optionsKeys.length; i++){
            if(Site.opLight.hasOwnProperty(optionsKeys[i]))
                Site.opLight[optionsKeys[i]] = opts[optionsKeys[i]];
        };
        var idRegx = /(#-?[_a-zA-Z]+[_a-zA-Z0-9-])\w+/g;
        var isId = false;

        if(Site.tesId(Site.opLight.element)){
            isId = true;
            Site.opLight.element = opLight.element.replace("#","");
        }

        if(Site.isFunction(Site.opLight.onClose))
            this.onClose = Site.opLight.onClose;

        if(Site.isFunction(Site.opLight.onLight))
            this.onLight = opLight.onLight;

        (Site.opLight.autoLight) ? this.doLight() : this.doClose();
    }

    Site.Lightbox.prototype = {
        onLight : function(){
            console.log("Lightbox is on");
        },
        onClose : function(){
            console.log("Lightbox is off");
        },
        doLight : function(){
            var dis = this;
            var lb = document.getElementById("lightbox-shadow");
            $(lb).fadeIn("fast",function(){
                $(document.getElementById(Site.opLight.element)).fadeIn('fast', function(){
                    dis.onLight();
                    $(lb).on("click", function(){
                      dis.doClose();
                  });
                });
            });
        },
        doClose : function(){
            var dis = this;
            var lb = document.getElementById("lightbox-shadow");
            $(lb).fadeOut('fast', function(){
                $(document.getElementById(Site.opLight.element)).fadeOut('fast', function(){$(lb).off('click')});
            })
        }
    }