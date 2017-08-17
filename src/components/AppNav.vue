<template>
<nav class="navbar navbar-light bg-faded rounded navbar-toggleable-md">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="../assets/jay.svg" alt="Jayway logo" /> Jaystore</a>

        <div class="collapse navbar-collapse" id="containerNavbar">
          <ul class="navbar-nav mr-auto">
           <router-link to="home"
                        tag="li" 
                        class="nav-item"
                        active-class="active"
                        exact
                    ><a class="nav-link">Home</a></router-link>
            <router-link
                        tag="li"
                        to="manage-products"
                        class="nav-item"
                        active-class="active"
                        exact
            ><a class="nav-link">Manage Products</a></router-link>

          </ul>
         
        </div>
      </nav>
      
    
          
       
       



</template>

<script>
export default {}
</script>