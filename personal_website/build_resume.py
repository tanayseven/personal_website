# coding=utf-8
from jinja2 import Environment, FileSystemLoader

with open('css.txt') as f:
    css_file_path = f.read()
css_file_path = '/' + '/'.join(css_file_path.split('/')[1:])
template = Environment(loader=FileSystemLoader('personal_website/pages/')).get_template('resume.html')


def stars(number=5):
    full_star = '<i class="fa fa-star" aria-hidden="true"></i>'
    half_star = '<i class="fa fa-star-half" aria-hidden="true"></i>'
    resultant_string = '(' + str(number) + ') ' + ''.join([full_star for _ in range(int(number))])
    resultant_string += half_star if (number - int(number)) > 0 else ''
    return resultant_string

print(template.render(
    css_file_path=css_file_path,
    page_title='Résumé',
    nav_button='resume',
    stars=stars,
))
