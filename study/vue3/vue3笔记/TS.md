# TS教程

## 1. 什么是 TS ?

`TS`是`TypeScript`的简称。TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

**TS vs JS：**

| TypeScript                                      | JavaScript                       |
| :---------------------------------------------- | :------------------------------- |
| JavaScript 的超集，用于解决大型项目的代码复杂性 | 一种脚本语言，用于创建动态网页。 |
| 强类型，支持静态和动态类型                      | 动态弱类型语言                   |
| 可以在编译期间发现并纠正错误                    | 只能在运行时发现错误             |
| 不允许改变变量的数据类型                        | 变量可以被赋予不同类型的值       |

**TS 的缺点：**

- 不能被浏览器理解，需要被编译成 JS
- 有学习成本，写习惯了 JS 的我们要上手需要花时间去理解，而且 TS 中有一些概念还是有点难，比如泛型。

## 2. 基础类型

> TS 支持 JS 原生的所有基础类型（boolean,number,string,null,undefined）之外，也扩展出了几个类型：
>
> - any
> - unknown
> - void
> - never

### 2.1 any

当你不清楚用什么类型的时候，可以用 any 类型。这些值可能来自于动态内容，比如用户输入或者第三方代码库。

```ts
let noSure:any = 4;

noSure = 'mybe a string'; // 可以赋值 string 类型
noSure = false; // 也可以赋值 boolean 类型
```

不建议使用 any，不然就丧失了 TS 的意义。

### 2.2 unknown

不建议使用 any，当不知道一个变量类型具体是什么时，该怎么办？

可以使用 **unknown** 类型

unknown 类型代表任何类型，它的定义和 any 定义很像，但是它是一个安全类型，使用 unknown 做任何事情都是不合法的。

比如，这样一个 divide 函数，

```ts
function divide(param: any){
  return param / 2;
}
```

因为不知道param类型，此时使用运算符“/”就会引发报错。

可以配合类型断言来解决该问题。像这样，

```ts
function divide(param: unknown){
  return param as number / 2;
}
```

### 2.3 void

void类型与 any 类型相反，它表示没有任何类型。

比如函数没有明确返回值，

```ts
function welcome():void {
 console.log('hello, world.');
}
```

## 3. 数组类型

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```ts
let list: Array<number> = [1, 2, 3];
```

## 4. 接口

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

```js
function printUser(user){
  console.log(user.name)
}
```

上述js代码中，参数user有一个隐式的类型约束。

1. 必须是对象类型
2. 包含必要属性name

但是参数user引发的错误，只能在运行时发现。

```ts
interface UserInfo {
  name: string
}

function printUser(user: UserInfo){
  console.log(user.name)
}
```

### 4.1 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

### 4.2 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly`来指定只读属性:

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```

你可以通过赋值一个对象字面量来构造一个`Point`。 赋值后， `x`和`y`再也不能被改变了。

```ts
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

 `readonly` vs `const`

最简单判断该用`readonly`还是`const`的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 `const`，若做为属性则使用`readonly`。

### 4.3 函数类型

接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

## 5. 函数

函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。

和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。

### 5.1 为函数定义类型

```ts
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };
```

我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。

**书写完整函数类型：**

```ts
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
```

函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。

第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( `=>`)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 `void`而不能留空。

### 5.2 可选参数和默认参数

TypeScript里的每个函数参数都是必须的。 这不是指不能传递 `null`或`undefined`作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。

```ts
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right
```

JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 `?`实现可选参数的功能。 比如，我们想让last name是可选的：

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right
```

可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。

在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是`undefined`时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为`"Smith"`。

```ts
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。

```ts
function buildName(firstName: string, lastName?: string) {
    // ...
}
```

和

```ts
function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```

共享同样的类型`(firstName: string, lastName?: string) => string`。 默认参数的默认值消失了，只保留了它是一个可选参数的信息。

与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 `undefined`值来获得默认值。 例如，我们重写最后一个例子，让 `firstName`是带默认值的参数：

```ts
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");  
```

## 6. 枚举

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。

### 6.1 数字枚举

首先我们看看数字枚举，如果你使用过其它编程语言应该会很熟悉。

```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```

如上，我们定义了一个数字枚举， `Up`使用初始化为 `1`。 其余的成员会从 `1`开始自动增长。 换句话说， `Direction.Up`的值为 `1`， `Down`为 `2`， `Left`为 `3`， `Right`为 `4`。

### 6.2 字符串枚举

字符串枚举的概念很简单，但是有细微的 [运行时的差别](https://www.tslang.cn/docs/handbook/enums.html#enums-at-runtime)。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```
