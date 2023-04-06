
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoggedIn: false,
    }
  },

  methods: {
    login() {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && this.email === storedUser.email && this.password === storedUser.password) {
        this.isLoggedIn = true;
        this.$router.push({ name: 'home', query: { redirect: '/home' } });

        //alert('Logged in successfully!');
      } else {
        alert('Login failed. Please try again.');
      }
    },

    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      alert('Logged out successfully!');
    },
  },

  mounted() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      this.email = storedUser.email;
      this.password = storedUser.password;
      this.login();
    }
  },
};

</script>
<template>

<div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Email"  v-model="email" aria-describedby="emailHelp"
                placeholder="Email">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password"  v-model="password" placeholder="password">
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="/register" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>


<style scoped>.btn-color{
  background-color: hsla(206,100%,73.3%,1);
  color: #fff;
  
}

.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}



.cardbody-color{
  background-color: white;
}

a{
  text-decoration: none;
}

</style>