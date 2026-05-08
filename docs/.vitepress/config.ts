import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CubeLab',
  description: 'Secure sandbox-based education platform on top of CubeSandbox.',
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'CubeLab',
      description: 'Secure sandbox-based education platform on top of CubeSandbox.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/what-is-cubelab' },
          { text: 'Architecture', link: '/architecture/overview' },
          { text: 'Contributing', link: '/contributing/agent-workflow' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [{ text: 'What Is CubeLab', link: '/guide/what-is-cubelab' }],
          },
          {
            text: 'Architecture',
            items: [{ text: 'Overview', link: '/architecture/overview' }],
          },
          {
            text: 'Contributing',
            items: [{ text: 'Agent Workflow', link: '/contributing/agent-workflow' }],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'CubeLab',
      description: '基于 CubeSandbox 的安全实验教学平台。',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/what-is-cubelab' },
          { text: '架构', link: '/zh/architecture/overview' },
          { text: '贡献', link: '/zh/contributing/agent-workflow' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [{ text: '什么是 CubeLab', link: '/zh/guide/what-is-cubelab' }],
          },
          {
            text: '架构',
            items: [{ text: '总体概览', link: '/zh/architecture/overview' }],
          },
          {
            text: '贡献',
            items: [{ text: 'Agent 协作流程', link: '/zh/contributing/agent-workflow' }],
          },
        ],
      },
    },
  },
});
