import sqlite3

from core.webui.model.Widget import Widget
from core.webui.model.WidgetSizes import WidgetSizes


class Date(Widget):

	DEFAULT_SIZE = WidgetSizes.w_small_wide
	DEFAULT_OPTIONS = {
		'format': 'dd/mm/yyyy'
	}

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)
