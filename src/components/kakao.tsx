import React from "react";

const Kakao = () => {
    return(
        <div>
            <button type="button" onClick={() => {window.location.href="http://192.168.0.76:8000/user/auth/kakao"}}>
                카카오로 로그인하기
            </button>
            <button type="button" onClick={() => {window.location.href="http://192.168.0.76:8000/user/auth/google"}}>google login</button>
        </div>
    )
}

export default Kakao;