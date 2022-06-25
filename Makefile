# See in https://www.gnu.org/software/make/manual/html_node/index.html
# for more information about Makefile.
.POSIX:
SHELL := /bin/bash
YARN :=  $(shell which yarn)

.PHONY: all
all: build

# Build the application
.PHONY: build
build: fmt
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(YARN) run build
	@echo -e "\033[32mBuild finished.\033[0m"

# Clear the application
.PHONY: clear
clear:
	if [ -d "docs/.vuepress/dist" ]; then \
		rm -rf "docs/.vuepress/dist"; \
	fi

# Local development
.PHONY: dev
dev:
	$(YARN) run dev

# Format the code
.PHONY: fmt
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(YARN) run fmt
	@echo -e "\033[32mFormatting finished.\033[0m"

# Lint the code
.PHONY: lint
lint:
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(YARN) run build
	@echo -e "\033[32mBuild finished.\033[0m"

# Install dependencies
.PHONY: install
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	if [ ! -d "node_modules" ]; then \
		$(YARN); \
	fi
	@echo -e "\033[32mDependencies installed.\033[0m"
