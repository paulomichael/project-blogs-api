
``` 
      1:N           1:N                 N:1
Users --< BlogPosts --< PostsCategories >-- Categories

```

Users:
id
displayName
email
password
image

BlogPosts:
id
title
content
userId(FK)
published
updated

PostsCategories:
postId(FK)
categoryId(FK)

Categories:
id
name
