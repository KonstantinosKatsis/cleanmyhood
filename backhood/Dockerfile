FROM php:8.4-fpm

WORKDIR /var/www/html/backhood

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    libmagickwand-dev \
    imagemagick \
    && docker-php-ext-install zip pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN pecl install xdebug-3.4.2 \
    && pecl install imagick \
    && docker-php-ext-enable xdebug imagick

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

COPY --chown=1000:1000 . /var/www/html/backhood

RUN chown -R www-data:www-data /var/www/html/backhood \
    && chmod -R 775 storage bootstrap/cache

RUN composer install --no-scripts --prefer-dist