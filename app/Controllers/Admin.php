<?php

namespace App\Controllers;

class Admin extends BaseController
{
    public function index()
    {
        return view("templates/header")
            . view("admin/dashboard")
            . view("templates/footer");
    }
}
