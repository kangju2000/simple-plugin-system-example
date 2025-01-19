# Simple Plugin System Example

텍스트 변환 기능을 통해 플러그인 시스템의 설계와 구현을 살펴보는 예제입니다.
자세한 설명은 블로그 포스트 [실전 플러그인 시스템 설계와 구현](https://kangju.dev/posts/plugin-system)을 참고해주세요.

## 기능

- 플러그인을 통한 텍스트 변환
- 메서드 체이닝으로 플러그인 조합
- TypeScript로 작성된 타입 안전한 코드

## 사용법

```typescript
import { TextProcessor } from "../plugin";
import {
  uppercasePlugin,
  trimPlugin,
  exclamationPlugin,
} from "./examples-plugins";

const processor = new TextProcessor();

processor.use(trimPlugin).use(uppercasePlugin).use(exclamationPlugin);

const result = processor.process("  hello world  ");
console.log(result); // "HELLO WORLD!"
```

### 커스텀 플러그인 만들기

```typescript
// examples-plugins.ts
import { Plugin } from "../plugin";

const emojiPlugin: Plugin = {
  name: "emoji",
  transform: (text: string) => `${text} 😊`,
};

// main.ts
import { TextProcessor } from "../plugin";
import { emojiPlugin } from "./examples-plugins";

const processor = new TextProcessor();

processor.use(emojiPlugin);

const result = processor.process("hello world");
console.log(result); // "hello world 😊"
```
