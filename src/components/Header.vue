<template lang="">
    <header>
        <div class="top">
            <div class="container">
                <span class="date" id="dateAndTime">13:15 11-15-2023 GMT +8:00</span>
                <div class="btns">
                    <button class="btn btn-gold">로그인</button>
                    <button class="btn btn-gold">회원가입</button>
                </div> 
            </div>
        </div>
        <div class="bottom">
            <button class="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="navbar-logo animate__animated  animate__fadeIn">
                <img src="@/assets/img/navbar-logo.png" alt="">
            </div>
            <div class="container">
                <div class="nav left">
                    <a href="#games-section">
                        <span>라이브카지노</span>
                        <span>live casino</span>
                    </a>
                    <a href="#games-section">
                        <span>슬롯게임</span>
                        <span>slot games</span>
                    </a>
                    <a href="#">
                        <span>마이페이지</span>
                        <span>my page</span>
                    </a>
                    <a href="#">
                        <span>고객센터</span>
                        <span>customer</span>
                    </a>
                </div>
                <div class="nav right">
                    <a href="#">
                        <span>공지사항</span>
                        <span>notice</span>
                    </a>
                    <a href="#">
                        <span>충전신청</span>
                        <span>deposit</span>
                    </a>
                    <a href="#">
                        <span>환전신청</span>
                        <span>withdraw</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  methods: {
  },
};
</script>
