<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Movies App</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item  href="/">Movies</b-nav-item>
                    <b-nav-item  href="#">My favorites</b-nav-item>
                    <b-nav-item  href= /login>Login</b-nav-item>
                    <b-nav-item  href= /register>Register</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>
  
<style scoped>
.nav-link {
    color: white;
}
</style>