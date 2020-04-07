// AVANT / ARRIERE
num = 1;

$('.next-section').on('click', function() {
    if (num !== 9) {
        num += 1;
        $('#section-'+(num-1)).hide();
        $('#section-'+num).show();
    }
});

$('.previous-section').on('click', function() {
    if (num !== 1) {
        num -= 1;
        $('#section-'+(num+1)).hide();
        $('#section-'+num).show();
    }
});

// PARTIE 1 DE L'ATELIER
name = '';
prevName = '';
components = 0;

$('img[component-name]').on('click', function() {
    name = $(this).attr('component-name');

    $(this).hide();
    $('.'+name).show();

    if (prevName) {
        if (build) {
            $('img[component-name='+prevName+']').show();
        }
        $('.'+prevName).hide()
    }

    prevName = name;

    components ++;

    if (components <= 5) {
        $('img.component-steps').attr('src', 'assets/images/puzzle/'+components+'.png');
        $('img.components-puzzle-'+(components)).hide();
    }
    if (components === 5) {
        $('button.btn-build-phone').show()
    }

});

build = false;
$('button.btn-build-phone').on('click', function() {
    build = true;
    $('img.component-steps').attr('src', 'assets/images/puzzle/phonecompleted.png');
    $('img[component-name]').show();
    $('p.text-build-phone').show();
    $('button.btn-build-phone').hide();
    $('.'+prevName).hide();
});

// PARTIE 2 DE l'ATELIER
useName = '';
prevUseName = '';

$('img[use-cat]').on('click', function() {
    useName = $(this).attr('use-cat');

    if (prevUseName) {
        $('img[use-cat='+prevUseName+']').show();
        $('p.'+prevUseName).hide()
    }

    $(this).hide();
    $('p.'+useName).show();

    prevUseName = useName
});

// PARTIE DE L'ATELIER 3

$('img[phone-direction]').on('click', function() {
    $(this).hide();
    $('p.text-phone-to-trash').toggleClass('visible invisible');
    $('p.phone-trash').toggleClass('invisible visible');
});