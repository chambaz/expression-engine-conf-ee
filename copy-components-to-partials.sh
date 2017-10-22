#!/bin/bash

for d in components/*; do 
    if [[ -f "$d/index.html" ]]; then
        cp "$d/index.html" system/user/templates/default_site/_partials/component_$(echo "$d" | cut -d/ -f2 | sed 's/-/_/g').html 
    fi
done
