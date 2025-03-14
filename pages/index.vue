<script setup>

import { useRouter } from 'vue-router';

import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// スキーマバリデーションの定義（ここでメッセージをカスタム可能）
const schema = yup.object({
  name: yup.string().required("名前は必須です"),
});

// フォームのセットアップ
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
});

// 各フィールドのセットアップ
const { value: name, errorMessage } = useField("name");
// useField("name") の戻り値（オブジェクト）から value と errorMessage だけを取り出し、名前を変更する という意味

const onSubmit = handleSubmit((values) => {
  console.log("送信データ:", values);
});　//console.logはデバッグ


const router = useRouter();

const goErrorPage = () => {
  router.push('/not-found'); // 存在しないページへ遷移
};
</script>

<template>
<div class="container">
<Mybutton>カスタマイズ</Mybutton>
<Card title="Nuxt" content="これは再利用可能！" />
<FooBar message="component内のファイルはアッパーキャメル記法で記載"></FooBar>
<button @click="goErrorPage">エラーが発生するボタン</button>
</div>

<form @submit.prevent="onSubmit">
//　提出前にOnSubmit関数を実行
    <label for="name">名前</label>
    <input v-model="name" id="name" type="text" />
    <div class="error">{{ errorMessage }}</div>
// 送信中にボタンを無効化
    <button type="submit" :disabled="isSubmitting">送信</button>
</form>

</template>