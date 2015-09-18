#!/usr/bin/env python
# -*- coding: utf-8 -*-
import glob
import os

from jinja2 import Environment, FileSystemLoader

from settings import INPUT_FOLDER, OUTPUT_FOLDER, OUTPUT_TEMPLATES


def compile_template(skeleton_path):
    '''
        Returns a string with its generated content.
        @skeleton_path (str): template basis to be used to render final template. Use relative path, considering from INPUT_FOLDER on.
    '''
    environment = Environment(loader=FileSystemLoader([INPUT_FOLDER]), trim_blocks=True, lstrip_blocks=True)
    template = environment.get_template(skeleton_path)
    return template.render()


def main():
    for jinja_template in OUTPUT_TEMPLATES:
        template_name, _ = os.path.splitext(jinja_template)
        template_name = os.path.join(OUTPUT_FOLDER, '%s.html' % template_name)

        if not os.path.exists(OUTPUT_FOLDER):
            os.makedirs(OUTPUT_FOLDER)

        with open(template_name, 'w') as f:
            f.write(compile_template(jinja_template).encode('utf-8'))


if __name__ == '__main__':
    try:
        main()
    except Exception, e:
        print 'ERROR: %s' % str(e)
    else:
        print 'Done!'
    raw_input('Press any key to continue...')
