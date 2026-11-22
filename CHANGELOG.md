# Changelog

## [0.1.1](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/compare/v0.1.0...v0.1.1) (2026-11-22)


### Features

* add daily audit workflow (schedule + workflow_dispatch) ([0060595](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/006059592bdbf9ce573b261af5732081f1357936))
* add Lighthouse audit workflow with agent triage ([eaadeea](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/eaadeeae39bba4cb681bdbae624cab8ea67dbf77))
* add optional topic field to bookings ([#15](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/15)) ([90badef](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/90badefd53c4e6709051d357e491888ffac30523))
* add topic field to booking form and dashboard ([#16](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/16)) ([f94aa15](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f94aa15df24bdd46149059593f6bf0d1550087d6))
* добавить автопроверку PR и шаблон ревью ([5c5c7ce](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/5c5c7ce7e4b6d736e5d48d5528d06cabaf08c687))
* тема встречи в записях и на дашборде ([#14](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/14)) ([c3be037](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/c3be037f6841fb246ccff807a33c947adf09cc85))


### Bug Fixes

* add beforeEach to clear bookings in bookings.test.ts ([f945e63](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f945e63f10206f0899f8fb8b826329ab5b7e60ff))
* add Render wake-up step and fallback for failed Lighthouse ([e68d7b7](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e68d7b71d8f23ca92bbed2fd939b7bfb1c396222))
* add run-name with PR/issue number for limit tracking ([0f4df85](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/0f4df850a7d643e71f113d0d351b5303e91ab75e))
* allow bot PRs to receive auto-review ([373664f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/373664fcd2efb41327284b5a5623111c43b74c79))
* allow external_directory access for worktree directories ([1ab418c](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/1ab418ceaad956411087574cee8c831e7a2cf389))
* apply migrations directly without drizzle-kit CLI ([6b8df8d](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6b8df8da128dc40e9942b3815bb78dd2d47d58e4))
* clear bookings before each test to prevent cross-test pollution ([cf1311f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/cf1311f7f1d04e1f70a299d91dcdb53ec58de5c2))
* correct auto-review permissions and input ([92a1169](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/92a116982505d610e4303f456cb79dbe8b61529d))
* correct DB path in bookings.test.ts beforeEach ([529481e](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/529481ece86a06c262edcaf57640f12f504cd9f9))
* correct jq filter for opencode JSONL output format ([220a453](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/220a453f75b8dd0b45ed82f1a952cc764af588d4))
* create own meeting type in GET /api/bookings test ([7fdf1c1](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/7fdf1c1a4dc0091d0e52d2b417312a0d95c36dd5))
* enable persist-credentials so agent can push implementation branch ([c9c04b0](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/c9c04b032780378eeb85c3640e34027a6119d0c4))
* exclude current run from limit count, fix reason detection ([e9e5021](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e9e50211625c6c4c82a49d1f06217b7286f3689b))
* format booking-validation.test.ts with prettier ([#15](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/15)) ([a9582fe](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/a9582fe5a762be05a07d6118a4d49022abf5f410))
* format bookings.test.ts ([6b8696a](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6b8696a307565d56d0d41c50213523c39921aab6))
* format bookings.test.ts with prettier ([00c29ca](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/00c29ca4d53f15a1fb4689fde5781c944ace6e7f))
* format MeetingsPage files with prettier ([#16](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/16)) ([c2bbc96](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/c2bbc96e64147fcde22bd3ca007b01d5acccf0d5))
* grant contents:write and pull-requests:write for implement-spec PR creation ([469bd87](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/469bd8753c5de6d442cf67741850f1255336f18c))
* grant issues/pull-requests write and pass GITHUB_TOKEN to agent ([414bbb6](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/414bbb6a64e4ae3f093081d61fe53b8d967dee96))
* isolate test databases between vitest test files ([608caa6](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/608caa6f3ac5cb42463c64686d39169ebb501a00))
* jq direct to file for comment publishing ([0a69968](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/0a699683ddb59126d93da2619a7a2ad88ba71c8f))
* make GET /api/bookings test self-contained ([f22a175](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f22a17549ad8c8c71a415e666b05b55ac2db16a7))
* parenthesize jq contains() to avoid boolean apply error ([22a4995](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/22a4995c7bc7b0af46acceff780aae4a5cbb2d41))
* pass --model flag explicitly and verify secret length ([d6bdc2a](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/d6bdc2a53017afdbb5b2798016de0819596b2182))
* pin opencode github action to real SHA from branch 2.0 ([98ed9f8](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/98ed9f88deedd27431b7a8448f9d45946c40ef18))
* pin opencode-action to existing tag v0.8.2 and enable share ([9872c76](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/9872c762ef97a6f69e5ae941c67eb119620bde0a))
* pre-authenticate gh CLI so agent can create issues ([8c59bc8](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/8c59bc8e6803f8a42e3f0ff1fcb7a4043cd083fd))
* reason=limit_exhausted when previous run succeeded ([4200a06](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/4200a06bc40b5f7c60ceb1473c55fd5a5bd5c10e))
* remove debug KEY_LENGTH echo from production workflow ([4ec6877](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/4ec68777ecd392ecc67dd0a095665710e60e30bc))
* remove unused within import from MeetingsPage test ([#16](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/issues/16)) ([7277e51](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/7277e5164b440f836c5968be3de90e7b167ec2d7))
* use correct composite action path for opencode/github ([6f3f8a2](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6f3f8a2fd8ec0ffc9dd932c32b6d25d94d4de708))
* use correct opencode-action reference (dceoy/opencode-action) ([1f3d301](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/1f3d3015ae0747d7a76f59d2b5a7d1998f551bc1))
* use curl without -f flag for wake-up (allow 404 responses) ([c3ec518](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/c3ec518a85f032f9b46ce9ae076eb1d557e4549f))
* use opencode CLI instead of GitHub action for auto-review ([e155a99](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e155a99c40c00c1af49484d6ef3c5fa0806f1ac2))
* use positional argument for opencode run message (not -p flag) ([0f8ed10](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/0f8ed10f60fa6dc0d5a5d7e5bae81a35a00ad131))
* use printf and temp file for gh pr comment, remove --auto from reviewer ([f6c5c38](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/f6c5c38f7cdb728a660156c7daa3af07a38738af))
* use pull_request_target to bypass approval requirement ([6edd7d0](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/6edd7d0e630790fb12a3583831577f2a9b822c7b))


### Documentation

* add audit workflow, lighthouse audit, and agent lessons learned to README ([5af244f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/5af244fec27f372f3902db831b9286d0d3490dc8))
* добавить описание автотриажа в README ([fcfefe4](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/fcfefe4268066dc1de1a88db08485e1163c3d24f))
* добавить описание агентского воркфлоу OpenCode в README ([a38aaec](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/a38aaec8a66018f2268d097afdb9e4af3251791a))
* добавить описание лимита запусков агента ([b9978ad](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/b9978adc222967f5853af19d335a0bc260940797))
* обновить README — инструкции запуска и статус Render ([e7ca85f](https://github.com/NelyaShaihutdinova/ai-for-developers-project-387/commit/e7ca85f67f6fc9d9fb6b8bc3f605743ddf820f47))
