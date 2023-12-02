<nav class="navbar navbar-expand-md bg-transparent navbar-dark">
    <a class="navbar-brand" href="../ADMIN/AdminDashboard.html">
        <img src="../images/mobile-store.png" alt="Logo" style="width:40px;">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="../ADMIN/Employee.html">Employee</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../ADMIN/SupplierReports.html">Order</a>
                <!--SUPPLIER ORDER-->
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../ADMIN/About.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../ADMIN/Logs.html">Logs</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                    Report
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="../ADMIN/ProductReports.html">Product</a>
                    <a class="dropdown-item" href="../ADMIN/EmployeeReports.html">Employee</a>
                    <a class="dropdown-item" href="../ADMIN/CustomerReport.html">Customer</a>
                    <a class="dropdown-item" href="../ADMIN/SaleReport.html">Over All Sales</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../AUTHENTICATE/changePassword.html">Change Password</a>
            </li>
            <li>
                <button onclick="LogOut()" class="btn btn-dark">Log Out</button>
            </li>
        </ul>
    </div>
</nav>