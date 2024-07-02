import { useState } from "react";
import useAuth from "../hooks/useAuth"

const LoginPage = () => {

    const { loading, login } = useAuth()

    const [infor, setInfor] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(infor)
    }

    return (
        <div style={styles.LoginPageContainer}>
            <div style={styles.LoginPageForm}>
                <h2>Đăng nhập <span style={styles.brandName}>B4minton.com</span></h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="username" style={styles.label}>Email</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={infor.email}
                            required
                            style={styles.input}
                            onChange={(e) => setInfor({ ...infor, email: e.target.value })}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={infor.password}
                            required
                            style={styles.input}
                            onChange={(e) => setInfor({ ...infor, password: e.target.value })}
                        />
                    </div>
                    <div style={styles.rememberMe}>
                        <a href="/register" style={styles.forgotPassword}>Chưa có tài khoản? <b>Đăng kí</b></a>
                        <a href="#" style={styles.forgotPassword}>Quên mật khẩu</a>
                    </div>
                    <button type="submit" style={styles.btnLogin}>{loading ? "Đang đăng nhập ..." : "Đăng nhập"}</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    LoginPageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
    },
    LoginPageForm: {
        background: '#fff',
        padding: '40px',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '400px',
    },
    brandName: {
        color: '#00c4cc',
    },
    description: {
        marginBottom: '30px',
        color: '#666',
    },
    inputGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#666',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    rememberMe: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    checkbox: {
        marginRight: '10px',
    },
    rememberLabel: {
        fontSize: '14px',
        color: '#666',
    },
    forgotPassword: {
        color: '#666',
        textDecoration: 'none',
        fontSize: '14px',
    },
    btnLogin: {
        backgroundColor: '#00c4cc',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        width: '100%',
        fontSize: '16px',
        cursor: 'pointer',
    }
};

export default LoginPage;