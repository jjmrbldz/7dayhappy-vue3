<template>
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
                    <button class="btn btn-gold" data-tab="withdraw" :class="{active : isWithdrawBoardActive}" @click="isWithdrawBoardActive = true, isDepositBoardActive = false">최근출금내역</button>
                    <button class="btn btn-gold"  data-tab="deposit" :class="{active : isDepositBoardActive}" @click="isWithdrawBoardActive = false, isDepositBoardActive = true">최근입금내역</button>
                </div>
                <div class="body animate__animated animate__fadeIn" id="withdraw" :class="{active : isWithdrawBoardActive}">
                    <ul>
                        <Vue3Marquee :vertical=true :pauseOnHover=true>
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
                        </Vue3Marquee>
                    </ul>
                </div>
                <div class="body animate__animated animate__fadeIn" id="deposit" :class="{active : isDepositBoardActive}">
                    <ul>
                        <Vue3Marquee :vertical=true :pauseOnHover=true>
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
                        </Vue3Marquee>
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
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
    name: "BoardPanel",
    data () {
        return {
            isWithdrawBoardActive: true,
            isDepositBoardActive: false,
        }
    },
    components: {
        Vue3Marquee,
    }
}
</script>

<style>

</style>