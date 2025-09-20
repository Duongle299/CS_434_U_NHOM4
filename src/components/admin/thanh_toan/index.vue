<template >
    <header>
        <div class="logo">LOGO</div>
        <nav>
            <input type="text" placeholder="Tìm kiếm...">
        </nav>
        <div>Khách Hàng</div>
    </header>
    <div class="container">
        <h2>Thanh toán</h2>
        <form>
            <label>Tên Khách Hàng</label>
            <input type="text" placeholder="Nhập tên">

            <label>Email</label>
            <input type="email" placeholder="Nhập email">

            <label>Số điện thoại</label>
            <input type="tel" placeholder="Nhập số điện thoại">

            <label>Tên sản phẩm</label>
            <input type="text" placeholder="Tên sản phẩm">

            <label>Tổng VAT và phí vận chuyển</label>
            <input type="number" placeholder="Nhập phí VAT và vận chuyển">

            <label>Tổng tiền</label>
            <input type="number" placeholder="Nhập tổng tiền">

            <div class="payment-method">
                <label><input type="radio" name="method"> Credit Cards</label>
                <label><input type="radio" name="method"> QR Banking</label>
            </div>
            <button type="submit">Thanh toán</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    body {
            font-family: Arial, sans-serif;
            margin: 0;
            background: #f8f8f8;
        }
        header {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 20px;
            border-bottom: 1px solid #ddd;
        }
        header .logo {
            font-weight: bold;
        }
        header nav {
            flex: 1;
            margin: 0 20px;
        }
        header nav input {
            width: 100%;
            padding: 5px;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }
        input[type="text"], input[type="email"], input[type="tel"], input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .payment-method {
            margin-top: 15px;
        }
        .payment-method label {
            display: flex;
            align-items: center;
            margin: 8px 0;
        }
        .payment-method input {
            margin-right: 10px;
        }
        button {
            display: block;
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background: #0078d7;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        button:hover {
            background: #005ea3;
        }
</style>