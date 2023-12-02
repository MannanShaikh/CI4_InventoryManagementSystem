<?php

use CodeIgniter\Router\RouteCollection;
use App\Controllers\Authenticaton;

/**
 * @var RouteCollection $routes
 */

$basePath = "/mobile-store";

$routes->get($basePath . '/authentication', [Authenticaton::class, 'OnGetLogin']);

$routes->post($basePath.'/authentication', [Authenticaton::class,'OnPostLogin']);