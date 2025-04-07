export const seo = {
  title: '克喵爱吃卤面 | 大学生、分享者',
  description:
    '我叫 克喵爱吃卤面。在南京就读的一位普通大二学生，喜欢分享自己的所见所闻。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://sen.kemiao.online'
      : 'http://localhost:3333'
  ),
} as const
