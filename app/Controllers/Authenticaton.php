<?php

namespace App\Controllers;

class Authenticaton extends BaseController
{
    public function login()
    {
        return view("authentication/login");
    }
}
