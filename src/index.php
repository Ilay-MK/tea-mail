<?php

    class ListPages {
        const PAGE_FORMAT   = ".html";

        const PAGE_HOME     = "home-page".PAGE_FORMAT;
        const PAGE_CATALOG  = "catalog-page".PAGE_FORMAT;
        const PAGE_PRODUCT  = "product-page".PAGE_FORMAT;

        $pages = array(
            'home'      => PAGE_HOME,
            'catalog'   => PAGE_CATALOG,
            'product'   => PAGE_PRODUCT
        );

        public static function getPage($page = 'home')
        {
            return self::$pages[$page];
        }
    }
?>


<?php

    $pages = array(
        'home'      => ListPages::getPage('home'),
        'catalog'   => ListPages::getPage('catalog'),
        'product'   => ListPages::getPage('product'),
    );
    $location = "/";

    if( isset($_GET['product']) ) {
        $location .= $pages['product'];
    }
    else if ( isset($_GET['catalog']) ) {
        $location .= $pages['catalog'];
    }
    else {
        $location .= $pages['home'];
    }

    header( 'Location: '.$location, true, 302 ); // перебросить на главную страницу сайта с использованием 307 редиректа.
?>
