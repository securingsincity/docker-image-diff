#Docker-Image-Diff

This will be changing but a way to use Uber's image-diff through docker

```
git clone https://github.com/securingsincity/docker-image-diff.git
mkdir images
# copy an actual.jpg and an expected.jpg to images
docker build -t image-diff .
docker run -it -v ./images:/usr/app/images image-diff
#produces a difference.png in images
```