<template>
<section>
    <div class="container-full">
        <div class="row gx-0">
            <div class="col-md-2 col-lg-2 SideBkg text-center">
                <img src="~/assets/pictures/logokandaka.svg" class="w-50" alt="KandakaLogo">
                <div class="d-flex align-items-center justify-content-start px-4 pt-4">
                    <img src="~/assets/svg/DashBoardIcon.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Dashboards</p>
                </div>
                <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/Orders.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Orders</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/Tickets.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Tickets</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/shop.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Products</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/subadmin.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Sub Admin</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/contact.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Contact</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/discounts.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Discounts</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/comments.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Comments</p>
                </div>
                <!-- Exit Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/exit.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Exit</p>
                </div>
            </div>
            <!-- search section -->
            <div class="col-md-10 col-lg-10 px-5">
                <div class="container-full bg-white SearchStyle">

                </div>
            </div>
        </div>
    </div>    
</section>
</template>

<script>
export default {
    
}
</script>

<style scoped>


.IconDist {
    margin-top: 35px;
}

.ItemsColor {
    color: #fff;
}

.SideBkg {
background-image: url("~/assets/pictures/AdminSidebar.png");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-height: 100vh;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
}

</style>