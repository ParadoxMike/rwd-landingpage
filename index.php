<?php

# uncomment if you need debugging
// ini_set('display_errors',1); 

spl_autoload_register(function ($classname) {
    $dirs = array (
        './' #./path/to/dir_where_src_renamed_to_Twig_is_in
    );

    foreach ($dirs as $dir) {
        $filename = $dir . str_replace('\\', '/', $classname) .'.php';
        if (file_exists($filename)) {
            require_once $filename;
            break;
        }
    }

});

$loader = new \Twig\Loader\FilesystemLoader('templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => 'cache',
]);

echo $twig->render('base.twig', ['name' => 'Carlos']);

?>