import sqlite3

from core.base.model.Widget import Widget
from core.base.model.widgetSizes import WidgetSizes


class Date(Widget):

	SIZE = WidgetSizes.w_small_wide
	OPTIONS = {
		'format': 'dd/mm/yyyy'
	}

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)
