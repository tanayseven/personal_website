.DELETE_ON_ERROR:

export SHELL:=/bin/bash

NODE:=$(or $(shell which node), /usr/bin/node)
NPM:=$(or $(shell which npm), /usr/bin/npm)
MD:=$(or $(shell which mdtrans), /usr/local/bin/mdtrans)

POSTS_SRC:=$(wildcard posts/*md)
OBJ_HTML:=$(patsubst posts/%.md, www/blog/%.html, $(POSTS_SRC))
RESULTANT_HTML:=$(foreach HTML, $(OBJ_HTML), $(eval $(call subdir_create, HTML)))

define subdir_create
$(./blog_path.py $(1)): $(1)
	$(mkdir $(dirname $(./blog_path.py $(1))))
	$(mv $(1) $(./blog_path.py $(1)))
endef

.PHONY: all
all: build

.PHONY: build
build: $(RESULTANT_HTML)

www/blog/%.html: posts/%.md www/blog
	$(MD) $^ > $@

www/blog:
	mkdir -p www/blog

.PHONY: clean
clean:
	rm -rf www/

.PHONY: checktools
checktools: $(NODE) $(NPM) $(MD)

$(NODE):
	sudo apt-get install nodejs-legacy

$(NPM):
	sudo apt-get install npm

$(MD):
	npm install -g mdtrans

deploy: deploy.sh
	$(SHELL) deploy.sh
