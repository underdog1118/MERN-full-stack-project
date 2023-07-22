## 1. MERN

![image-20230721015619066](images/image-20230721015619066.png)

![image-20230721020108672](images/image-20230721020108672.png)

![image-20230721020442797](images/image-20230721020442797.png)

![image-20230721020618924](images/image-20230721020618924.png)



## 2. Big Picture

![image-20230721023158351](images/image-20230721023158351.png)

![image-20230721162042788](images/image-20230721162042788.png)

In such cases it will help to replace (in `package.json`) ...

```
"start": "react-scripts start" 
```

... with ...

```
"start": "react-scripts --openssl-legacy-provider start"
```

... and ...

```
"build": "react-scripts build" 
```

... with ...

```
"build": "react-scripts --openssl-legacy-provider build"
```