<template>
    <section>
        <div class="container">
            <div class="board-wrapper">
                <div class="left-board">
                    <div class="header">
                        <div class="icon">
                            <img src="src/assets/img/icons/faq-icon.png" alt="">
                            <span>FAQ</span>
                        </div>
                        <button class="btn btn-gold btn-sm">전체보기</button>
                    </div>
                    <div class="body">
                        <ul>
                            <li>What are the payment methods available?</li>
                            <li>Some random questions?</li>
                            <li>Some random questions?</li>
                            <li>Some random questions?</li>
                        </ul>
                    </div>
                </div>
                <div class="mid-board">
                    <div class="header">
                        <button class="btn btn-gold active" data-tab="withdraw">최근출금내역</button>
                        <button class="btn btn-gold"  data-tab="deposit">최근입금내역</button>
                    </div>
                    <div class="body active animate__animated animate__fadeIn" id="withdraw">
                        <ul>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                        </ul>
                    </div>
                    <div class="body animate__animated animate__fadeIn" id="deposit">
                        <ul>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                            <li>
                                <span class="user">jjmr****</span>
                                <span class="amount">1,000,000 won</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right-board">
                    <div class="header">
                        <div class="icon">
                            <img src="src/assets/img/icons/announcement-icon.png" alt="">
                            <span>공지사항</span>
                        </div>
                        <button class="btn btn-gold btn-sm">전체보기</button>
                    </div>
                    <div class="body">
                        <ul>
                            <li>기존 회원분들 비밀번호 0000입니다. <span class="date">2023-11-15</span></li>
                            <li>Lorem ipsum dolor sit amet, consectetur adi...<span class="date">2023-11-15</span></li>
                            <li>★ Seven Day Login Bonus! ★<span class="date">2023-11-15</span></li>
                            <li>Join weekly events and receive rewards!<span class="date">2023-11-15</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BoardPanel"
}
</script>

<style>

</style>