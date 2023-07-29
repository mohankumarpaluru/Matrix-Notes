---
title: Update the Publish Settings
---

There are two things you can modify in the workflow. The publish directory and the blog repository.

* `BLOG_REPO`: Next.JS app repository template that is used to publish your markdown notes. This is useful when you [create your own custom notes blog](deploy-a-custom-Matrix-Notes.md)
* `PUBLISH_DIR`: The folder that is published to the Matrix Notes. All files and attachments in this folder will be published on the web

Go into `.github/workflows/publish.yml` in your forked repository forked from [Matrix-Notes-md](https://github.com/mohankumarpaluru/Matrix-Notes-md) and update the environment variables to your desire
![publish-dir-yml.png](attachments/publish-dir-yml.png)
