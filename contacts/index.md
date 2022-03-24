---
title: Контакты компании
description: На этой странице есть, контакты компании такие как, номер телефон, whatsapp и адрес, а так же форма заказа звонка
layout: layout/static.njk
feedback: true
---

# Контакты

- Наш номер телефона [{{ envs.contacts.phone }}](tel:{{ envs.contacts.phone }})

- Наш [WhatsApp](https://wa.me/{{ envs.contacts.wa }})

- Наши адреса: 
{% for item in envs.contacts.addresses %}
{% if item.mapLink %}
	- [{{ item.address }}]({{ item.mapLink }})
{% else %}
	- {{ item.address }}
{% endif %}
{% endfor %}
