<template>
    <!-- **************** MAIN CONTENT START **************** -->
    <main>

    <!-- =======================
    Inner intro START -->
    <section>
        <div class="container">
            <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div class="bg-primary bg-opacity-10 rounded p-4 p-sm-5">
                        <h2>Create your free account </h2>
                        <!-- Form START -->
                        <form class="mt-4">
                            <!-- Email -->
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
                                <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                            </div>
                            <!-- Password -->
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********">
                            </div>
                            <!-- Password -->
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword2">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="*********">
                            </div>
                            <!-- Checkbox -->
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Yes i'd also like to sign up for additional subscription</label>
                            </div>
                            <!-- Button -->
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-success">Sign me up</button>
                                </div>
                                <div class="col-sm-8 text-sm-end">
                                    <span>Have an account? <router-link to="/signin"><u>Sign in</u></router-link></span>
                                </div>
                            </div>
                        </form>
                        <!-- Form END -->
                        <hr>
                        <!-- Social-media btn -->
                        <div class="text-center">
                            <p>Sign up with your social network for quick access</p>
                            <ul class="list-unstyled d-sm-flex mt-3 justify-content-center">
                                <li class="mx-2">
                                    <a href="#" class="btn bg-facebook d-inline-block"><i class="fab fa-facebook-f me-2"></i> Sign up with Facebook</a>
                                </li>
                                <li class="mx-2">
                                    <a href="#" class="btn bg-google d-inline-block"><i class="fab fa-google me-2"></i> Sign up with google</a>
                                </li>
                            </ul>
                        </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    <!-- =======================
    Inner intro END -->

    </main>
    <!-- **************** MAIN CONTENT END **************** -->
</template>

<script>
export default {
    name: "VueSignup"
}
</script>
