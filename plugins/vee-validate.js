import { defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

// ルールの登録
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// グローバルなエラーメッセージの設定
configure({
    generateMessage: (ctx) => {
        const fieldMessages = {
            name: {
                required: "名前は必須です",
            },
            email: {
                required: "メールアドレスは必須です",
                email: "正しいメールアドレスを入力してください",
            },
            password: {
                required: "パスワードを入力してください",
                min: "パスワードは最低8文字以上で入力してください",
            },
        };
        return messages[ctx.rule.name] || "入力が無効です";
    },
});