(function($) {
	
    var self = $.saganizer = new function(){};
	
    $.extend(self, {

    	saganBackgrounds : [
    		'https://www.brainpickings.org/wp-content/uploads/2014/01/carlsagan.jpg'
    	],

        saganImages : [
			"https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.JPG",
			"https://www.myclassiclyrics.com/artist_biographies/images/Carl_Sagan_Biography.jpg",
			"https://www.organicsoul.com/wp-content/uploads/2011/05/Carl_Sagan.jpg",
			"https://briankoberlein.com/wp-content/uploads/1-carl-sagan-a-la-sombra-de-la-sabina.jpg",
			"https://voiceseducation.org/sites/default/files/images/carl_sagan.jpg",
			"https://static.guim.co.uk/sys-images/Observer/Pix/pictures/2014/3/31/1396285938224/Carl-Sagan-Cosmos-011.jpg",
			"https://sedasepipes.files.wordpress.com/2013/08/carl_sagan.jpg",
			"https://awesomeuniverse.org/wp-content/uploads/2013/03/03-Cosmos-de-Carl-Sagan.jpg",
			"https://azarius.net/media/images/news/sagan.jpg",
			"https://lounge.obviousmag.org/nao_mataras/2014/03/17/tumblr_md7isyetdz1qkrwsmo1_1280.jpg",
			"https://66south.com/Sagan/files/carl-sagan-bc.jpg",
			"https://thoriumforum.com/sites/default/files/styles/large/public/carl-sagan.jpg?itok=kohi9LSU",
			"https://universoracionalista.org/wp-content/uploads/2014/08/ada.png",
			"https://www.wikinoticia.com/images/alt1040/cdn.alt1040.com.files.2010.11.carl-sagan.jpg",
			"https://universoracionalista.org/wp-content/uploads/2014/08/Carl-Sagan-GIFs.jpg",
			"https://i.huffpost.com/gen/1167150/thumbs/o-CARL-SAGAN-MARIJUANA-facebook.jpg",
			"https://33.media.tumblr.com/tumblr_md8a00jqoX1qbh26io4_500.gif",
			"https://starchild.gsfc.nasa.gov/Images/StarChild/scientists/sagan.jpg",
			"https://www.brainpickings.org/wp-content/uploads/2014/01/carlsagan.jpg",
			"https://apod.nasa.gov/apod/image/9612/sagan_uc_big.jpg",
			"https://38.media.tumblr.com/tumblr_md8a00jqoX1qbh26io1_500.gif",
			"https://media.giphy.com/media/JWeOLmnFvLYB2/giphy.gif",
			"https://media.giphy.com/media/jlfulL2NK1D2M/giphy.gif",
			"https://stream1.gifsoup.com/view6/2812427/carl-sagan-sings-o.gif",
			"https://38.media.tumblr.com/tumblr_lxsdt9yTa51qa68j2o1_r1_500.gif",
			"https://2.bp.blogspot.com/-de1pjTJrTvI/T1dtvKMh20I/AAAAAAAABkk/NaO4Dazv5dQ/s640/carl-sagan-BRILLIANT.jpg",
			"https://www.geekation.com/wp-content/uploads/2013/03/Geekation_CarlSagan.jpg",
			"https://38.media.tumblr.com/tumblr_lxsdt9yTa51qa68j2o1_r1_500.gif",
			"https://i107.photobucket.com/albums/m288/loraxliz487/sagan_uc.gif",
			"https://2.bp.blogspot.com/-5fjpDkevCn0/UDlCxc8O3vI/AAAAAAAAEzs/zCBadb-cz-o/s1600/carl-sagan-dude-what.png",
			"https://38.media.tumblr.com/tumblr_many2uOzZx1rc5hfyo1_500.gif",
			"https://media.giphy.com/media/DvLMc86OgxdYc/giphy.gif",
			"https://38.media.tumblr.com/tumblr_lvjf87nxJq1qbrdymo1_500.gif",
			"https://souljerky.com/_media/CarlSaganGanesha.jpg"
        ],

        saganNames : [
        	"god", "deus"
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        },

        changeSaganNames : function (saganNames) {
        	var namesToRegexp = saganNames[0];
        	for(var i = 1; i < saganNames.length; i++){
        		namesToRegexp += "|" + saganNames[i]; 
        	}
        	$("body").html($("body").html().replace(new RegExp(namesToRegexp,'gi'),'Sagan'));
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.saganImages, 3000);
     	self.handleLogo(self.saganBackgrounds, 3000);
     	self.changeSaganNames(self.saganNames);
    });
})(jQuery);