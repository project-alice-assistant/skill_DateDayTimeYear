import sqlite3

from core.base.model.Widget import Widget
from core.base.model.widgetSizes import WidgetSizes


class Clock(Widget):

	SIZE = WidgetSizes.w_small
	OPTIONS: dict = dict()

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)
