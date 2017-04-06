$(document).ready(function() {
    function createGift(gift) {
        return '<div class="row gift"><div class="col-sm-12"><a href="' + gift.link + '"target="_blank">' + gift.text + '</a></div></div>';
    }

    var gifts = [
        {
            text: 'Roberts Radio',
            link:'http://www.arnotts.ie/roberts-radio-revival-250-retro-lwmwfm-duck-egg-r250de/361116/650100300'
        },
        {
            text: 'Denby Heritage Pavilion Large Mug x4',
            link: 'http://www.arnotts.ie/denby-heritage-pavilion-large-mug-03ltr-multi/337385/979400275100300'
        },
        {
            text: 'Denby Heritage Pavilion Dessert/Salad Plate x4',
            link: 'http://www.arnotts.ie/denby-heritage-pavilion-dessertsalad-plate/337377/979400275100200'
        },
        {
            text: 'Denby Heritage Pavilion Soup/Cereal Bowl x4',
            link: 'http://www.arnotts.ie/denby-heritage-pavilion-soupcereal-bowl-17cm/337379/979400275100150'
        },
        {
            text: 'Denby Heritage Pavilion Pasta Bowl x4',
            link: 'http://www.arnotts.ie/denby-heritage-pavilion-pasta-bowl-215cm/337383/979400275100150',
        },
        {
            text: 'Le Creuset Signature Cast Iron Oval Casserole Flint',
            link: 'http://www.arnotts.ie/le-creuset-signature-cast-iron-oval-casserole-27-cm-flint/441924/979400250150',
        },
        {
            text: 'Le Creuset Signature Cast Iron Round Casserole Flint',
            link: 'http://www.arnotts.ie/le-creuset-signature-cast-iron-round-casserole-flint/441920/979400250150',
        },
        {
            text: 'Circulon Origins 5 Piece Cookware Set',
            link: 'http://www.arnotts.ie/circulon-origins-5-piece-cookware-set/438548/400250100',
        },
        {
            text: 'Denby Eclipse 16 Piece Cutlery Set',
            link: 'http://www.arnotts.ie/denby-eclipse-16-piece-cutlery-set/439526/400275200',
        },
        {
            text: 'Denby White James Martin 16 Piece Dinner Set',
            link: 'http://www.arnotts.ie/denby-white-james-martin-16-piece-dinner-set/446484/979400275100100',
        },
        {
            text: 'Gordon Ramsay By Royal Doulton Maze dark grey 12 piece set',
            link: 'http://www.debenhams.ie/webapp/wcs/stores/servlet/prod_10052_10001_332093500763PC12_-1',
        },
        {
            text: 'John Lewis Country Arley Duvet Cover Set',
            link: 'http://www.arnotts.ie/john-lewis-country-arley-duvet-cover-set/444079/400400200',
        },
        {
            text: 'Le Creuset Toughened Shallow Fry Pan Non Stick',
            link: 'http://www.arnotts.ie/le-creuset-toughened-shallow-fry-pan-non-stick/301709/979400250100200',
        },
        {
            text: '12 Piece Hutton Dinner Set',
            link: 'http://www.next.ie/en/g752786s1',
        },
        {
            text: 'Kenwood kMix Kitchen Machine ',
            link: 'http://www.arnotts.ie/kenwood-kmix-kitchen-machine-kmx50gbk/403126/979650400750',
        },
        {
            text: 'Mindy Brownes Watson Metal Lantern Large',
            link: 'http://www.arnotts.ie/mindy-brownes-watson-metal-lantern-large/371800/400500350',
        },
        {
            text: 'Grey Oversized Gallery Clock',
            link: 'http://www.lauraashley.com/uk/clocks/grey-oversized-gallery-clock/invt/3677605',
        },
        {
            text: 'Deyongs 800 Grm Opulence Towel Silver',
            link: 'http://www.arnotts.ie/deyongs-800-grm-opulence-towel-silver/419255/979400450',
        },
        {
            text: 'Belleek Living Swirl Lamp & Shade',
            link: 'http://www.arnotts.ie/belleek-living-swirl-lamp-and-shade/420441/400500350',
        },
        {
            text: 'Swan Cream "Retro" digital microwave',
            link: 'http://www.debenhams.ie/webapp/wcs/stores/servlet/prod_10052_10001_325009114782_-1?CMP=SSH&tmcampid=28&tmad=c&sku=7773471&cmp=KNC__683763090_39709337910__&mkwid=s%7cpcrid%7c155423928855%7cpkw%7c%7cpmt%7c%7cpdv%7cc%7cprd%7c7773471&gclid=Cj0KEQjwiI3HBRDv0q_qhqXZ-N4BEiQAOTiCHmT0qviZYr65qhJLFyJ9QUodO1k6Heal3tM5zkbablkaAnH48P8HAQ&gclsrc=aw.ds',
        },
        {
            text: 'Dyson DC39 Multifloor',
            link: 'http://www.harveynorman.ie/small-appliances/vacuum-cleaners/bagless-vacuum-cleaners/dyson-dc39-multifloor.html'
        }
    ];

    var giftEl = $('.gifts');
    gifts.forEach(function (gift) {
        giftEl.append(createGift(gift));
    });



});