# Changelog

## [0.1.1](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/compare/v0.1.0...v0.1.1) (2026-11-18)


### Features

* добавить автопроверку PR и шаблон ревью ([5c5c7ce](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/5c5c7ce7e4b6d736e5d48d5528d06cabaf08c687))


### Bug Fixes

* add beforeEach to clear bookings in bookings.test.ts ([f945e63](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f945e63f10206f0899f8fb8b826329ab5b7e60ff))
* add run-name with PR/issue number for limit tracking ([0f4df85](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/0f4df850a7d643e71f113d0d351b5303e91ab75e))
* apply migrations directly without drizzle-kit CLI ([6b8df8d](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6b8df8da128dc40e9942b3815bb78dd2d47d58e4))
* clear bookings before each test to prevent cross-test pollution ([cf1311f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/cf1311f7f1d04e1f70a299d91dcdb53ec58de5c2))
* correct auto-review permissions and input ([92a1169](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/92a116982505d610e4303f456cb79dbe8b61529d))
* correct DB path in bookings.test.ts beforeEach ([529481e](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/529481ece86a06c262edcaf57640f12f504cd9f9))
* create own meeting type in GET /api/bookings test ([7fdf1c1](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/7fdf1c1a4dc0091d0e52d2b417312a0d95c36dd5))
* exclude current run from limit count, fix reason detection ([e9e5021](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e9e50211625c6c4c82a49d1f06217b7286f3689b))
* format bookings.test.ts ([6b8696a](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6b8696a307565d56d0d41c50213523c39921aab6))
* format bookings.test.ts with prettier ([00c29ca](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/00c29ca4d53f15a1fb4689fde5781c944ace6e7f))
* grant issues/pull-requests write and pass GITHUB_TOKEN to agent ([414bbb6](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/414bbb6a64e4ae3f093081d61fe53b8d967dee96))
* isolate test databases between vitest test files ([608caa6](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/608caa6f3ac5cb42463c64686d39169ebb501a00))
* make GET /api/bookings test self-contained ([f22a175](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f22a17549ad8c8c71a415e666b05b55ac2db16a7))
* parenthesize jq contains() to avoid boolean apply error ([22a4995](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/22a4995c7bc7b0af46acceff780aae4a5cbb2d41))
* pin opencode github action to real SHA from branch 2.0 ([98ed9f8](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/98ed9f88deedd27431b7a8448f9d45946c40ef18))
* pin opencode-action to existing tag v0.8.2 and enable share ([9872c76](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/9872c762ef97a6f69e5ae941c67eb119620bde0a))
* pre-authenticate gh CLI so agent can create issues ([8c59bc8](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/8c59bc8e6803f8a42e3f0ff1fcb7a4043cd083fd))
* reason=limit_exhausted when previous run succeeded ([4200a06](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/4200a06bc40b5f7c60ceb1473c55fd5a5bd5c10e))
* use correct composite action path for opencode/github ([6f3f8a2](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6f3f8a2fd8ec0ffc9dd932c32b6d25d94d4de708))
* use correct opencode-action reference (dceoy/opencode-action) ([1f3d301](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/1f3d3015ae0747d7a76f59d2b5a7d1998f551bc1))


### Documentation

* добавить описание автотриажа в README ([fcfefe4](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/fcfefe4268066dc1de1a88db08485e1163c3d24f))
* добавить описание агентского воркфлоу OpenCode в README ([a38aaec](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/a38aaec8a66018f2268d097afdb9e4af3251791a))
* добавить описание лимита запусков агента ([b9978ad](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/b9978adc222967f5853af19d335a0bc260940797))
* обновить README — инструкции запуска и статус Render ([e7ca85f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e7ca85f67f6fc9d9fb6b8bc3f605743ddf820f47))
